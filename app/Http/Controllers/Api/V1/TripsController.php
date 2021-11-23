<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\TripResource;
use App\Models\Trip;
use Illuminate\Http\Request;

class TripsController extends Controller
{
    public function index(Request $request)
    {
        $query = Trip::query();

        //include cancelled trips
        if (!filter_var($request->query("includeCancelled"), FILTER_VALIDATE_BOOLEAN)) {
            $query = $query->where("status", '=',"COMPLETED");
        }

        // search for keyword
        if ($request->query('keyword')) {
            $keyword = $request->query('keyword');
            $query = $query->where('pickup_location', 'LIKE', '%' . $keyword . '%')
                ->orWhere('dropoff_location', 'LIKE', '%' . $keyword .
                    '%')
                ->orWhere('type', 'LIKE', '%' . $keyword .
                    '%')
                ->orWhere('driver_name', 'LIKE', '%' . $keyword .
                    '%')
                ->orWhere('car_make', 'LIKE', '%' . $keyword .
                    '%')
                ->orWhere('car_model', 'LIKE', '%' . $keyword .
                    '%')
                ->orWhere('car_number', 'LIKE', '%' . $keyword .
                    '%');
        }

        //distance filter
        if ($request->query('distance')) {
            switch ($request->query('distance')) {
                case 'd_below_two':
                    $query = $query->where('distance', '<', 2);
                    break;
                case 'd_three_to_eight':
                    $query = $query->whereBetween('distance', [3,8]);
                    break;
                case 'd_eight_to_fifteen':
                    $query = $query->whereBetween('distance', [8,15]);
                    break;
                case 'd_fifteen':
                    $query = $query->where('distance', '>=', 15);
                    break;
                default:
                    break;
            }
        }

        //time filter
        if ($request->query('time')) {
            switch ($request->query('time')) {
                case 't_below_five':
                    $query = $query->where('duration', '<', 5);
                    break;
                case 't_five_to_ten':
                    $query = $query->whereBetween('duration', [5, 10]);
                    break;
                case 't_ten_to_twenty':
                    $query = $query->whereBetween('duration', [10, 20]);
                    break;
                case 't_twenty':
                    $query = $query->where('duration', '>=', 20);
                    break;
                default:
                    break;
            }
        }

        // get all trips
        $trips = $query->get();


        return new TripResource($trips);
    }


    public function show(Trip $trip)
    {
        return new TripResource($trip);
    }
}
