<?php

use App\Http\Controllers\BudgetController;
use App\Http\Controllers\IssueController;
use App\Http\Controllers\TokenController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::resource('issues', IssueController::class)->except([ 'edit', 'create' ]);

Route::resource('budget', BudgetController::class)->except([ 'edit', 'create' ]);

Route::get('/income-outcome', [BudgetController::class, 'get_income_outcome'])->name('income_outcome');
