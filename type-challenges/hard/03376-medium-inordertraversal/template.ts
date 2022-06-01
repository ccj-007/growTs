interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
// Inorder: left -> root -> right
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] ?
  [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>] : 
  [];