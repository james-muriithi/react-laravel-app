<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsTable extends Migration
{
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('status');
            $table->datetime('request_date');
            $table->string('pickup_lat');
            $table->string('pickup_lng');
            $table->string('pickup_location');
            $table->string('dropoff_lat');
            $table->string('dropoff_lng');
            $table->string('dropoff_location');
            $table->string('pickup_date');
            $table->string('dropoff_date')->nullable();
            $table->string('type');
            $table->integer('driver_id');
            $table->string('driver_name');
            $table->integer('driver_rating');
            $table->string('driver_pic');
            $table->string('car_make');
            $table->string('car_model');
            $table->string('car_number');
            $table->string('car_year');
            $table->string('car_pic');
            $table->integer('duration');
            $table->string('duration_unit');
            $table->float('distance', 10, 2);
            $table->string('distance_unit');
            $table->integer('cost');
            $table->string('cost_unit');
            $table->timestamps();
            $table->softDeletes();
        });
    }
}