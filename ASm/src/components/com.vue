<template>
    <form class="bg-white" @submit.prevent="default">
      <div class="mb-3">
        <label for="a" class="form-label">A: </label>
        <input type="number" class="form-control" id="email" placeholder="Nhập A" v-model="form.a" required>
      </div>
      <div class="mb-3">
        <label for="b" class="form-label">B: </label>
        <input type="number" class="form-control" id="phone" placeholder="Nhập B" v-model="form.b" required>
      </div>
      <div class="mb-3">
        <h2>Answer: {{ form.answer }} </h2>
  
      </div>
      <button type="submit" class="btn btn-primary" @click="calculate(form.a, form.b, '+')"> Cộng </button>
      <button type="submit" class="btn btn-primary" @click="calculate(form.a, form.b, '-')"> Trừ </button>
      <button type="submit" class="btn btn-primary" @click="calculate(form.a, form.b, '*')"> Nhân  </button>
      <button type="submit" class="btn btn-primary" @click="calculate(form.a, form.b, ':')"> Chia </button>
    </form>
  </template>
  <script setup>
  import { reactive } from 'vue';
  
  const form = reactive({
    a: null,
    b: null,
    answer: null,
  });
  
  const calculate = (a, b, o) => {
  switch (o) {
    case '*':
      form.answer = a * b;
      break;
    case '+':
      form.answer = a + b;
      break;
    case '-':
      form.answer = a - b;
      break;
    case ':':
    case '/':
      if (b !== 0) {
        form.answer = a / b;
      } else {
        form.answer = 'Error: Division by zero';
      }
      break;
    default:
      form.answer = 'Error: Invalid operator';
  }
}
  
  </script>