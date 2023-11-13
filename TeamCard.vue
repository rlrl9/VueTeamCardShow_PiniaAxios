<template>
    <div class="card" style="width: 18rem;margin: auto;">
        <img v-bind:src="srcUrl" class="card-img-top" width="70" height="200" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ food }}</p>
            <button class="btn btn-primary" @click="handleClick">OK</button>
        </div>
        
    </div>
</template>
<script setup>
    import { defineProps } from 'vue'; 
    import { useWeatherStore } from '@/stores/weather';
    import { storeToRefs } from 'pinia';
    const weathering = useWeatherStore();
    const { weathers } = storeToRefs(weathering);
    weathering.getWeather();
    const emit = defineEmits(['someEvent']);
    const p = defineProps( {
        name : String,
        food : {
            type: String,
            default: "떡볶이"            
        },
        srcUrl: String,
        teamNum : Number,
        showing: String
    });
    function handleClick() {
        alert(`${p.teamNum}팀입니다~~~!! 오늘의 날씨는 ${weathers.value}입니다.`);
        emit('someEvent');
    }
</script>

