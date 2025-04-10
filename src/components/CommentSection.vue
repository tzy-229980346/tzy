<template>
  <div class="comment-section">
    <h3 class="comment-title">评论</h3>
    <div class="comment-form">
      <textarea placeholder="说点什么吧..."></textarea>
      <button class="submit-btn">发表评论</button>
    </div>
    <div class="comment-list">
      <div class="comment-item" v-for="i in 3" :key="i">
        <div class="user-avatar"></div>
        <div class="comment-content">
          <div class="user-name">用户{{ i }}</div>
          <div class="comment-text">这是一条示例评论，展示评论区的样式和布局。</div>
          <div class="comment-actions">
            <span class="comment-time">2023-05-{{ i.toString().padStart(2, '0') }}</span>
            <span class="comment-like">
              <i class="iconfont icon-like"></i>
              <span>{{ i * 5 }}</span>
            </span>
            <span class="comment-reply">回复</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 这里不需要实现任何功能
</script>

<style scoped lang="less">
.comment-section {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .comment-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .comment-form {
    margin-bottom: 20px;

    textarea {
      width: 100%;
      height: 80px;
      padding: 10px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      resize: none;
      font-size: 14px;
    }

    .submit-btn {
      margin-top: 10px;
      padding: 8px 16px;
      background-color: #c62f2f;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        background-color: #d63031;
      }
    }
  }

  .comment-list {
    .comment-item {
      display: flex;
      margin-bottom: 20px;

      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #e0e0e0;
        margin-right: 15px;
      }

      .comment-content {
        flex: 1;

        .user-name {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .comment-text {
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .comment-actions {
          font-size: 12px;
          color: #999;

          span {
            margin-right: 15px;
          }

          .comment-like, .comment-reply {
            cursor: pointer;

            &:hover {
              color: #c62f2f;
            }
          }

          .icon-like {
            margin-right: 3px;
          }
        }
      }
    }
  }
}
</style>