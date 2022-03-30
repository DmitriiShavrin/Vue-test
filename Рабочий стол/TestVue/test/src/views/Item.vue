<template>
    <li class="list-group-item bg-secondary text-white d-flex align-items-center">
        <p class="m-0 ps-3"><span class='text-warning'>ID:</span> {{ $props.item.id }}, <span class='text-warning ms-2'>T:</span> {{ $props.item.indicator }} ℃</p>
        <button class="btn btn-warning ms-auto" @click="$store.dispatch('edit', $props.item.id)">Edit</button>
        <button class="btn btn-danger ms-2" @click="$store.dispatch('remove', $props.item.id)">Delete</button>
    </li>
</template>


<script>
export default { 
    props: ['item'],
}
</script>


