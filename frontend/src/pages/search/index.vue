<script setup>
import { ref, reactive } from 'vue';
import { showToast } from 'vant';

// options
const show = ref(false);
const actions = [
    { name: '选项一' },
    { name: '选项二' },
    { name: '选项三' },
];
const onSelect = (item) => {
    // 默认情况下点击选项时不会自动收起
    // 可以通过 close-on-click-action 属性开启自动收起
    show.value = false;
    showToast(item.name);
};

// search
const value = ref('');

</script>

<template>
    <div class="container">
        <!-- search card -->
        <div class="card">
            <div class="top">
                <van-cell is-link title="安庆师范大学图书馆" @click="show = true" />
                <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
            </div>

            <div class="middle">
                <van-row>
                    <van-col span="6">
                        <van-cell is-link title="题名" @click="show = true" />
                        <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
                    </van-col>

                    <van-col span="18">
                        <van-search v-model="value" placeholder="请输入搜索关键词" />
                    </van-col>
                </van-row>
            </div>

            <div class="bottom">
                <van-button type="success" block>检索</van-button>
            </div>
        </div>

        <!-- search history -->
        <div class="history">
            <div class="title">
                <span class="name">检索历史</span>
                <span class="btn">
                    <van-icon name="delete-o" />
                </span>
            </div>

            <div class="content">
                <van-tag round type="primary">标签1111</van-tag>
            </div>
        </div>

        <!-- hot search -->
        <div class="hot">
            <div class="title">
                <span class="name">热门搜索</span>
            </div>
            <div class="content">
                <van-empty description="暂无热门" />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>

<style>
:root:root {
    --van-tag-padding: 5px
}
</style>