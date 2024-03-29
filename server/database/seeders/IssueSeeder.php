<?php

namespace Database\Seeders;

use App\Models\Issue;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IssueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('issues')->truncate();
        Issue::factory(5)->create();
    }
}
