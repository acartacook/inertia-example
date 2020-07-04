<template>
	<layout>
		<div class="container">
			<div class="col-md-6">
				<div v-if="Object.keys(errors).length > 0" class="alert alert-danger mt-4">
					{{ errors[Object.keys(errors)[0]][0] }}
				</div>
				<form action="/users" method="PATCH" class="my-5" @submit.prevent="editUser">
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" class="form-control" id="name" placeholder="Name" v-model="form.name">
					</div>
						<div class="form-group">
						<label for="email">E-mail</label>
						<input type="email" class="form-control" id="email" placeholder="E-mail" v-model="form.email">
					</div>
						<div class="form-group">
						<label for="password">Password</label>
						<input type="password" class="form-control" id="password" placeholder="Password" v-model="form.password">
					</div>
					<button type="submit" class="d-flex btn btn-danger" :disabled="loading" >Submit</button>
				</form>

				<button class="btn btn-danger" @click="deleteUser">Delete User</button>
			</div>
		</div>
	</layout>
</template>

<script>
import Layout from '../../../Shared/Layout'
export default {
	props: ['user', 'errors'],
	components: {
		Layout,
	},
	data(){
		return {
			loading: false,
			form: {
				name: this.user.name,
				email: this.user.email,
				password: ''
			}
		};
	},
	methods: {
		editUser(){
			this.loading = true;
			this.$inertia.patch(`/users/${this.user.id}`, this.form)
				.then(() => {
					this.loading = false;
				});
		},
		deleteUser(){
			if(confirm('Are you dure you want to delete ' + this.user.name + '?')){
				this.$inertia.delete(`/users/${this.user.id}`).then(()=>{});
			}
		}
	}
}
</script>