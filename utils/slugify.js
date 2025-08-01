/**
 * Convert a string to a URL-friendly slug
 * @param {string} text - The text to slugify
 * @returns {string} - The slugified text
 */
export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

/**
 * Generate a product URL using the product ID and optionally a slug
 * @param {number} id - Product ID
 * @param {string} [name] - Product name for slug generation
 * @returns {string} - The product URL
 */
export const getProductUrl = (id, name) => {
  if (name) {
    const slug = slugify(name);
    return `/products/${id}`;
  }
  return `/products/${id}`;
};
