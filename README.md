# egg-memory-leak

memory leak demo

## 重现步骤：
克隆本仓库到本地
```bash
$ npm i
$ npm run test-local
$ ctrl + C 退出
```
打开 Activity Monitor 观察，内存占用不断上升，直到机器变卡

![memory leak](./memory-leak.png)
