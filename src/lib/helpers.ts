import parse from "html-react-parser";
import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitize comment content.
 *
 * @see https://www.npmjs.com/package/isomorphic-dompurify
 */
export function sanitizeComment(dirtyComment: string) {
  /**
   * Deal with comment hyperlinks.
   *
   * @see https://github.com/cure53/DOMPurify/blob/main/demos/hooks-target-blank-demo.html
   */
  DOMPurify.addHook("afterSanitizeAttributes", function (node) {
    if ("target" in node) {
      // Force all links to open in a new tab.
      node.setAttribute("target", "_blank");
      // Add rel attribute and set appropriate values.
      node.setAttribute("rel", "external noopener noreferrer nofollow");
    }
  });

  return parse(DOMPurify.sanitize(dirtyComment));
}

// export function flatListToHierarchical(
//   data = [],
//   { idKey = "key", parentKey = "parentId", childrenKey = "children" } = {}
// ) {
//   const tree: any[] = [];
//   const childrenOf = {};

//   // Loop through each item in the list.
//   data.forEach((item) => {
//     const newItem = { ...item };
//     const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
//     childrenOf[id] = childrenOf[id] || [];
//     newItem[childrenKey] = childrenOf[id];
//     parentId
//       ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
//       : tree.push(newItem);
//   });

//   return tree;
// }
