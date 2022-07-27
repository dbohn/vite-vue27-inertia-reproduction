<script>
    export default {
        data() {
            return {
                myForm: this.$inertia.form({
                    text: "",
                    enabled: false,
                })
            }
        },

        methods: {
            save() {
                console.log(this.myForm);
            }
        }
    }
</script>

<template>
    <div class="bg-white">
        <form action="." method="POST" @submit.prevent="save">
            <div class="announcement announcement-warning shadow-sm">
                <textarea
                    name="announcement" id="announcement"
                    cols="30" rows="3"
                    class="w-100 announcement-input"
                    placeholder="Placeholder"
                    v-model="myForm.text">
                </textarea>
            </div>

            <div class="d-flex mt-2">
                <div>
                    <label class="d-flex align-items-baseline">
                        <input
                            type="checkbox"
                            id="announcement_display"
                            name="announcement_display"
                            :value="true" class="mr-1"
                            v-model="myForm.enabled">
                        Enable
                    </label>
                </div>
                <button class="ml-auto btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>
