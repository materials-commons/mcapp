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
    import {remote} from 'electron';

    const fs = require('fs');
    export default {
        name: "Home",
        data() {
            return {
                projects: [],
            }
        },
        mounted() {
            console.log('remote.app.getPath("home") =', remote.app.getPath('home'));
            console.log('fs', fs);
            fs.readFile('/home/gtarcea/.materialscommons/config.json', (err, data) => {
                console.log('config.json =', JSON.parse(data));
            });
            this.$http.post('https://materialscommons.org/api/v4/ui/getProjectsForUser?apikey=472abe203cd411e3a280ac162d80f1bf').then(
                (projects) => {
                    console.log(projects);
                    this.projects = projects.data;
                },
                err => console.log(err)
            )
        }
    }
</script>

<style scoped>

</style>