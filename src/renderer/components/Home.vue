<template>
    <div>
        <h3>Projects</h3>
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Path</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="project in projects">
                <td style="max-width: 150px">{{project.name}}</td>
                <td>{{project.location ? project.location : 'Not Set'}}</td>
                <td>
                    <a @click.prevent="setProjectLocation(project)" href="">Set Location</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import rest from '../services/rest';
    import {getDirFromUser} from '../services/api';

    export default {
        name: "Home",
        data() {
            return {
                projects: [],
            }
        },
        methods: {
            setProjectLocation: (project) => {
                getDirFromUser().then(dir => project.location = dir);
            }
        },
        async mounted() {
            let {data} = await rest.post('/v4/ui/getProjectsForUser');
            data.forEach(p => p.location = null);
            this.projects = data;
        }
        // mounted() {
        //     rest.post('/v4/ui/getProjectsForUser').then(
        //         (projects) => {
        //             projects.data.forEach(p => p.location = null);
        //             this.projects = projects.data;
        //         },
        //         err => console.log(err)
        //     )
        // }
    }
</script>

<style scoped>

</style>