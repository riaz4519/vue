<?php

namespace App\Http\Controllers;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AuthController extends Controller
{
    //

    public function login(Request $request){


        $http = new Client();



        try{
            $response  = $http->post(config('services.passport.login_endpoint'),[
                'form_params' =>[
                    'grant_type' => 'password',
                    'client_id' =>config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username' => $request->get('username'),
                    'password' => $request->get('password'),
                ]

            ]);

            return $response->getBody();
        }catch (BadRequestHttpException $e){

            if ($e->getCode() == 400){

                return response()->json('Invalid request.Please enter a username or a password',$e->getCode());
            }
            else if ($e->getCode() == 401){

                return response()->json('Your credentials are incorrect.please try again',$e->getCode());
            }

            return  response()->json('Something went wrong.please try again',$e->getCode());

        }


    }

    public function register(Request $request){

        $request->validate([
            'name' => "required|string|max:255",
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ]);

        return User::create([
           'name' => $request->name,
           'email' =>  $request->email,
            'password' => Hash::make($request->password),
        ]);
    }
    public function logout(){

        auth()->user()->tokens->each(function ($token,$key){

            $token->delete();

        });

        return response()->json('Logged out successfully',200);
    }
}
