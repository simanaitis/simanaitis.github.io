__Product search progresive web app example__

App requirements list:
- [X] Generated app code should be commited.
- [X] App should use Angular 4.
- [X] App should have everything inlined into single html.
- [X] App should take make use of add to home screen button (create manifest.json and icons).
- [X] App should be self contained.
- [X] App should have mininum three screens (routes) (search, product description, loading catalog data).
  -[X] Load catalog
  -[X] Search catalog
  -[ ] Product description
- [X] App should use responsive design (material design components and principles, fluid layout).
- [X] App should Download latest products catalog, or use it cached version.
- [X] App should have button to redownload products catalog instead of using cached version.
- [X] App should work offline (create service worker).
- [X] Search in app should work via service worker using Lunr.js with Name, Description, Meta Keywords, SKU of a product.
- [ ] Redownload button should clear the cache of product file.
- [X] Load images from cache, if unable to load image and there is no internet connection use fallback instead.