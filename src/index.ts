import { HandleRequest, HttpRequest, HttpResponse} from "@fermyon/spin-sdk"
import getStringArray from "./get-string-array"
import getValidWords from "./get-valid-words"

const encoder = new TextEncoder()

export const handleRequest: HandleRequest = async (req: HttpRequest): Promise<HttpResponse> => {
  const { uri } = req
  const isValidRequest = uri.includes('?s=')
  const res: HttpResponse = { status: 200 }

  if (!isValidRequest) return res

  const words = getValidWords(getStringArray(uri))
  res.body = encoder.encode(JSON.stringify(words)).buffer

  return res
}
