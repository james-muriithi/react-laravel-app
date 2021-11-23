<?php

namespace Database\Factories;

use App\Models\Trip;
use Illuminate\Database\Eloquent\Factories\Factory;

class TripFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Trip::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'status' => array_rand(array_keys(Trip::STATUS_SELECT)),
            'request_date' => $this->faker->date,
            'pickup_lat' => $this->faker->latitude(),
            'pickup_lng' => $this->faker->longitude(),
            'pickup_location' =>  $this->faker->address,
            'dropoff_lat' => $this->faker->latitude(),
            'dropoff_lng' => $this->faker->longitude(),
            'dropoff_location' => $this->faker->address,
            'pickup_date' => $this->faker->date,
            'dropoff_date' => $this->faker->date,
            'type' => array_rand(array_keys(Trip::TYPE_SELECT)),
            'driver_id' => $this->faker->randomDigit,
            'driver_name' => $this->faker->name,
            'driver_rating' => $this->faker->numberBetween(0, 5),
            'driver_pic' => $this->faker->sentence,
            'car_make' => $this->faker->sentence,
            'car_model' => $this->faker->sentence,
            'car_number' => $this->faker->sentence,
            'car_year' => $this->faker->year,
            'car_pic' => $this->faker->sentence,
            'duration' => $this->faker->randomDigit,
            'duration_unit' => $this->faker->word,
            'distance' => $this->faker->randomDigit,
            'distance_unit' => $this->faker->word,
            'cost' => $this->faker->randomDigit,
            'cost_unit' => $this->faker->word,
        ];
    }
}
