@extends('layouts.master')

@section('content')
<h3 class="title-app">Quản lý tài khoản</h3>
<div class="w-100 d-flex flex-row-reverse mb-4"><button id="btn-addnew" onclick="location.href='{{ route ('web_accountmanager_create')}}'" class="btn-add">Add New</button></div>

@component('accountmanager::components.account-manager-datatable')
@endcomponent

@endsection