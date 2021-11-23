<?php

namespace App\Http\Controllers;

use App\Models\Trip;

class SeedDatabaseFromJSON extends Controller
{
    public function index()
    {
        $response = file_get_contents("https://hr.hava.bz/trips/recent.json");
        $tripsData = (array)json_decode($response);
        $tripsData = $tripsData["trips"];

        foreach ($tripsData as $key => $trip) {
            Trip::create((array)$trip);
        }
    }
}
