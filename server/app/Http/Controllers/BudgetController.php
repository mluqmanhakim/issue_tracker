<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use Illuminate\Http\Request;

class BudgetController extends Controller
{
    public function index()
    {
        return Budget::all();
    }

    public function show(Budget $budget)
    {
        return $budget;
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'amount' => 'required',
            'category' => 'required',
        ]);
        return Budget::create($data);
    }

    public function update(Request $request, Budget $budget)
    {
        $validated_data = $request->validate([
            'title' => 'sometimes|required',
            'amount' => 'sometimes|required',
            'category' => 'sometimes|required',
        ]);

        $budget->update($validated_data);
        return $budget;
    }
}
