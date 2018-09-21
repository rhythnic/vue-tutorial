# Step - 6

## Changes

- Use a computed property to sort images in descending order by number of likes.
- Use computed property to computed the most likes.
- Pass the mostLikes and image.likes to the GalleryImage component
- In GalleryImage, use a computed property to compute the image style tag.
- Use CSS filter blur to blur images that are less popular.

## Notes

- Array.prototype.sort mutates the array. A computed property should not mutate the
data, so we're using Array.prototype.slice to make a copy of the array.
