export type GetBlock = {
  __component: string,
  [x: string]: any,
}

type Block = {
  id: number,
  __component: string,
}

export type BlockManagerProps = {
  blocks: Block[],
}
