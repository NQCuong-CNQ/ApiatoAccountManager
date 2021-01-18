@extends('layouts.master')

@section('content')
<h3 class="title-app">{{trans("accountmanager::account-manager.title_app")}}</h3>
<div class="w-100 d-flex flex-row-reverse mb-4">
	<a href="{{route('web_accountmanager_create')}}">
		<button class="btn-add">{{trans("accountmanager::account-manager.buttons.add_new")}}</button>
	</a>
</div>

@component('accountmanager::components.account-manager-datatable')
@endcomponent

@endsection