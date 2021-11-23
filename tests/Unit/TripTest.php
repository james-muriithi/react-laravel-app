<?php

namespace Tests\Unit;

use App\Models\Trip;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class TripTest extends TestCase
{
    use RefreshDatabase;

    /**
     * test search of trip using a keyword
     *
     * @return void
     */
    public function test_can_search_data()
    {
        $trips = Trip::all();

        $searchParams = [
            'keyword' => 'david',
        ];

        $this->get(route("api.trips.index", $searchParams))
            ->assertStatus(200)
            ->assertJsonStructure([
                "data" => [
                    '*' => array_keys($trips->toArray())
                ]
            ]);
    }

    /**
     * test if a trip can be fetched using an id
     *
     * @return void
     */
    public function test_can_show_trip()
    {
        $trip = Trip::factory()->create();

        $this->get(route("api.trips.show", $trip->id))
            ->assertStatus(200)
            ->assertJsonStructure([
                "data" => array_keys($trip->toArray())
            ]);
    }    
}
