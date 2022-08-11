import { deleteAsync as del } from 'del';

export default function clean(cb) {
  return del('build').then(() => {
    cb()
  })
};
