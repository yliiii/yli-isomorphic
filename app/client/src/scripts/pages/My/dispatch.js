import globalActions from 'actions/global'

export async function getUserInfo(userId = 111, callback) {
  await globalActions.getUserInfo({ userId }, callback)
}

// server直出初始化数据
export default async function () {
  await getUserInfo()
}