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
                <td>{{project.name}}</td>
                <td>{{project.location ? project.location : "Not Set"}}</td>
                <td><button class="btn btn-primary" @click="setProjectLocation(project)">Set Location</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import rest from '../services/rest';
    import {getDirFromUser} from '../services/api';
    // import currentWindowTracker from '../services/current-window';
    // import {ipcRenderer} from 'electron';

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
        mounted() {
            rest.post('/v4/ui/getProjectsForUser').then(
                (projects) => {
                    projects.data.forEach(p => p.location = null);
                    this.projects = projects.data;
                    // getDirFromUser().then(dir => console.log('selected dir', dir));
                    // console.log('currentWindowTracker.currentWindow', currentWindowTracker.currentWindow);
                    // ipcRenderer.send('getDirFromUser', currentWindowTracker.currentWindow.id);
                    // ipcRenderer.on('selectedDir', (event, data) => console.log(data));
                    // mainProcess.getDirFromUser(remote.getCurrentWindow());
                },
                err => console.log(err)
            )
        }
    }
</script>

<style scoped>

</style>