<?php

namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        $data_view = [
            'judul' => 'Kiara',
            'page_konten' => 'user/index',
        ];

        return $this->user_template($data_view, []);
    }

    // public function sendEmail()
    // {
    //     $name = $this->request->getPost('name');
    //     $email = $this->request->getPost('email');
    //     $message = $this->request->getPost('msg');

    //     $emailService  = \Config\Services::email();
    //     $emailService ->setFrom('madanishofa@gmail.com', 'shofa');
    //     $emailService ->setTo('iotanine69@gmail.com');
    //     $emailService ->setSubject('iota');
    //     $emailService ->setMessage('bonjour');

    //     try {
    //         if ($emailService->send()) {
    //             echo 'Email sent successfully!';
    //         } else {
    //             echo 'Email sending failed.';
    //         }
    //     } catch (\Exception $e) {
    //         echo 'An error occurred: ' . $e->getMessage();
    //     }
        
    // }

}
