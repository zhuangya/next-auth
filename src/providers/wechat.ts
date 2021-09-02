import { Profile } from "src"
import { OAuthConfig, OAuthUserConfig } from "./oauth"

export interface WeChatProfile extends Profile {
  id: string
  picture: { data: { url: string } }
}

// TODO:  完成下面 4 个 functions （当前为了类型不报错所以暂时写成了 undefined
// "https://open.weixin.qq.com/connect/oauth2/authorize?response_type=code",
const authorization = undefined
// "https://api.weixin.qq.com/sns/oauth2/access_token",
const token = undefined
// "https://api.weixin.qq.com/sns/userinfo",
const userinfo = undefined
const profile = undefined

// function authorization() {}
// function token() {}
// function userinfo() {}
// function profile() {}

export default function WeChat<P extends WeChatProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "wechat",
    name: "WeChat",
    type: "oauth",
    authorization,
    token,
    userinfo,
    profile,
    options,
  }
}
