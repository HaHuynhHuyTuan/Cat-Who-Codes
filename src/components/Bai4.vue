<template>
  <div class="calculator">
    <h2>Máy Tính Đơn Giản</h2>
    <input type="number" v-model="num1" placeholder="Nhập số thứ nhất" />
    <input type="number" v-model="num2" placeholder="Nhập số thứ hai" />

    <div class="buttons">
      <button @click="add">Cộng</button>
      <button @click="subtract">Trừ</button>
      <button @click="multiply">Nhân</button>
      <button @click="divide">Chia</button>
    </div>

    <p>Kết quả phép toán: {{ result }}</p>
    
    <h3>Nhập thêm phép toán khác</h3>
    <input type="number" v-model="num3" placeholder="Nhập số thứ ba" />
    <input type="number" v-model="num4" placeholder="Nhập số thứ tư" />

    <div class="buttons">
      <button @click="calculateTotal">Tính Tổng</button>
    </div>

    <p>Tổng của hai phép tính: {{ total }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: null,
      num2: null,
      num3: null,
      num4: null,
      result: null,
      total: null,
    };
  },
  methods: {
    add() {
      this.result = Number(this.num1) + Number(this.num2);
    },
    subtract() {
      this.result = Number(this.num1) - Number(this.num2);
    },
    multiply() {
      this.result = Number(this.num1) * Number(this.num2);
    },
    divide() {
      if (this.num2 !== 0) {
        this.result = Number(this.num1) / Number(this.num2);
      } else {
        this.result = 'Lỗi: Không thể chia cho 0';
      }
    },
    calculateTotal() {
      this.total = (Number(this.num1) + Number(this.num2)) + (Number(this.num3) + Number(this.num4));
    },
  },
};
</script>

<style scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin: 5px;
}
.buttons {
  margin: 10px 0;
}
button {
  margin: 5px;
}
</style>