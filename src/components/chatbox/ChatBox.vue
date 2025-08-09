<template>
    <div class="chatbox">
        <div class="w-400px h-420px bg-[var(--dls-color-white)] rounded-10px shadow-xl flex flex-col" v-if="isOpen">
            <div class="flex justify-between items-center p-16px border-b-1 border-[#ededed]">
                <div class="flex gap-8px items-center">
                    <img class="w-32px h-32px" src="@/assets/images/chatbox/logo.svg" alt="logo">
                    <div class="font-700 text-16px leading-22px tracking-0.32px color-[var(--dls-color-9f593f)]">Artisan Compounding Pharmacy</div>
                </div>
                <div class="flex gap-16px">
                    <img class="w-20px h-20px cursor-pointer" src="@/assets/images/chatbox/resize-icon.svg" alt="resize-icon">
                    <img class="w-20px h-20px cursor-pointer" @click="isOpen = false" src="@/assets/images/chatbox/close-icon.svg" alt="close-icon">
                </div>
            </div>

            <div class="flex flex-col px-16px py-8px h-full">
                <div class="flex-1 flex flex-col gap-16px items-end">
                    <div class="w-full font-400 text-16px leading-23px tracking-0.32px text-center color-[var(--dls-color-7d7d7d)]">Ask us anything, or share your <br /> feedback.</div>
                    <div class="w-270px border-1 border-[#ededed] p-12px rounded-8px text-14px leading-21px tracking-0.28px color-[var(--dls-color-2a2a2a)]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
                </div>

                
                <div class="w-full flex gap-8px">
                    <el-input class="flex-1" v-model="messageInput" type="text" placeholder="Type message ..." />

                    <div class="w-40px h-40px bg-[var(--dls-color-9f593f)] flex items-center justify-center p-8px rounded-full cursor-pointer">
                        <img src="@/assets/images/chatbox/send-icon.svg" alt="send">
                    </div>
                </div>
            </div>
        </div>

        <div class="chatbox--btn" @click="isOpen = !isOpen">
            <el-icon :size="24" color="#2a2a2a"><ChatDotRound /></el-icon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isOpen = ref<boolean>(false)
const messageInput = ref<string>('')
</script>

<style lang="scss" scoped>
.chatbox {
    position: fixed;
    bottom: 50px;
    right: 50px;
    display: flex;
    align-items: flex-end;
    gap: 24px;
    z-index: var(--dls-header-z-index);

    &--btn {
        background: var(--dls-color-white);
        border: 1px solid var(--dls-color-2a2a2a);
        padding: 16px;
        border-radius: 9999px;
        cursor: pointer;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            opacity: .8;
        }
    }
}
</style>