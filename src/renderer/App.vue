<template>
    <div id="app">
        <nav class="navbar navbar-dark fixed-top bg-nav p-0 shadow">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">MaterialsCommons</a>
            <div class="d-flex justify-content-end">
                <input class="form-control w-75 form-rounded" type="text" placeholder="Search" aria-label="Search">

                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                        <form method="post" id="signout">
                            <a class="nav-link" href="#" onclick="document.getElementById('signout').submit()">Sign
                                out</a>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 col-sm-2 d-none d-md-block bg-grey-10 sidebar">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column mt-3">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="home"></span>
                                    <i class="fa-fw fas fa-binoculars mr-2"></i>
                                    Dashboard
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa-fw fas fa-address-book mr-2"></i>
                                    Teams
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa-fw fas fa-project-diagram mr-2 "></i>
                                    Projects
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa-fw fas fa-tasks mr-2"></i>
                                    Tasks
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa-fw fas fa-folder mr-2"></i>
                                    Files
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa-fw fas fa-users-cog mr-2"></i>
                                    Users
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa-fw fas fa-cogs mr-2"></i>
                                    Settings
                                </a>
                            </li>
                        </ul>

                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Saved Reports</span>
                            <a class="d-flex align-items-center text-muted" href="#">
                            </a>
                        </h6>

                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Saved Searches</span>
                        </h6>

                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Quick Access</span>
                        </h6>
                    </div>
                </nav>

                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <div class="mt-3">
                        <router-view></router-view>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mcapp'
    }
</script>

<style>
    /* CSS */
</style>
