import { Base } from "./base";
import { Posts } from "./posts";
import { applyMixins } from "./utils";

class FakerPack extends Base { }

interface FakerPack extends Posts { }

applyMixins(FakerPack, [Posts])

export default FakerPack;