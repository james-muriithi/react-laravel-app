<?php

namespace App\Models;

use \DateTimeInterface;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Trip extends Model
{
    use SoftDeletes;
    use HasFactory;

    public const TYPE_SELECT = [
        'LADY' => 'LADY',
        'GENT' => 'GENT',
    ];

    public const STATUS_SELECT = [
        'COMPLETE'  => 'COMPLETE',
        'CANCELLED' => 'CANCELLED',
    ];

    public $table = 'trips';

    protected $dates = [
        'request_date',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'id',
        'status',
        'request_date',
        'pickup_lat',
        'pickup_lng',
        'pickup_location',
        'dropoff_lat',
        'dropoff_lng',
        'dropoff_location',
        'pickup_date',
        'dropoff_date',
        'type',
        'driver_id',
        'driver_name',
        'driver_rating',
        'driver_pic',
        'car_make',
        'car_model',
        'car_number',
        'car_year',
        'car_pic',
        'duration',
        'duration_unit',
        'distance',
        'distance_unit',
        'cost',
        'cost_unit',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
