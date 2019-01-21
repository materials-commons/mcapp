<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in projects">
                <td>{{project.name}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import api from '../services/api';

    export default {
        name: "Home",
        data() {
            return {
                projects: [],
            }
        },
        mounted() {
            api.post('/v4/ui/getProjectsForUser').then(
                (projects) => {
                    this.projects = projects.data;
                },
                err => console.log(err)
            )
        }
    }
</script>

<style scoped>

</style>