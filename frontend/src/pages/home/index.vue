<script setup>
import { ref } from 'vue';


// more list
const list = ref([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
    // 异步更新数据
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
            finished.value = true;
        }
    }, 1000);
};
</script>

<template>
    <div class="container">
        <!-- header image -->
        <div class="header">
            <div class="bar">
                <van-icon name="qr" />
                <van-icon name="search" @click="$router.push('/search')"/>
            </div>
            <img src="" alt="">
        </div>

        <!-- borrowing status -->
        <div class="status">

        </div>

        <!-- swipe -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>

        <!-- functions -->
        <div class="functions">

        </div>

        <!-- library card -->

        <!-- more list -->
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>

    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;

    .header {
        width: inherit;
        height: 20vh;
        outline: 1px solid red;

        .bar{
            display: flex;
            justify-content: space-between;
        }
    }

    .status {
        width: inherit;
        height: 10vh;
        outline: 1px solid red;
    }

    .functions {
        width: inherit;
        height: 20vh;
        outline: 1px solid red;
    }
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
</style>
