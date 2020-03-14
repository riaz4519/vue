<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class AuthController extends Controller
{
    //

    public function login(Request $request){



        return $request;

        $http = new Client();



        try{
            $response  = $http->post('http://localhost/oauth/token',[
                'form_params' =>[
                    'grant_type' => 'password',
                    'client_id' => 2,
                    'client_secret' => 'cPdYektlpeh7u6S981HOywJXtMrFSC4eY3LkVjqQ',
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
}
