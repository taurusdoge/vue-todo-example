import { reactive } from 'vue';
import type { Store } from './types';

export const store: Store = reactive({
  todos: [
    {
      id: 1,
      subject: 'buy milk'
    },
    {
      id: 2,
      subject: 'call mom'
    },
    {
      id: 3,
      subject: 'read a book'
    }
  ]
});
