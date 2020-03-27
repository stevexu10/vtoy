<template>
  <div>
    <b-navbar type="" variant="light">
      <b-navbar-nav>
        <b-nav-item-dropdown text="Record Claim" left>
          <b-dropdown-item href="#">Breast Prostheses</b-dropdown-item>
          <b-dropdown-item href="#">Communication Aids</b-dropdown-item>
          <b-dropdown-item href="#">More...</b-dropdown-item>
          <!--b-dropdown-item href="#">Insulin Syringe</b-dropdown-item-->
          <router-link :to="{ path: '/grocerySimple', params: { display: true } }" class="dropdown-item">Record Insulin Syringe Claim</router-link>
          <b-dropdown-item href="#">More...</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="#">Assess Claim</b-nav-item>

        <b-nav-item href="#">View Claim</b-nav-item>

        <router-view></router-view>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
