# 使用 Node.js 20 版本的 Alpine Linux 作为基础镜像
FROM node:18-alpine

# 设置容器内的工作目录为 /app
WORKDIR /app

# 将当前目录下的所有文件复制到容器的工作目录中
COPY . .

# 使用 yarn 安装生产环境依赖包
RUN yarn install --production

# 设置容器启动时执行的命令，运行 Node.js 应用
CMD ["node", "src/index.js"]
