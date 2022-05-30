<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use Illuminate\Http\Request;

class BudgetController extends Controller
{
    public function index()
    {
        return Budget::orderBy('created_at', 'DESC')->get();
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

    public function get_income_outcome()
    {
        $incomes = Budget::where("amount", ">=", 0)->pluck('amount')->toArray();
        $outcomes = Budget::where("amount", "<", 0)->pluck('amount')->toArray();
        $data['income'] = array_sum($incomes);
        $data['outcome'] = array_sum($outcomes);
        return $data;
    }
}
