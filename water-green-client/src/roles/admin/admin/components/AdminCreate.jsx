//burada adminCreate diye bir func oluşturucaz. 
//Burası da aslında Routes kısmındaki AdminRoutes kısmına gidecek 
//buradaki component direk o route içinde sayfa gibi görüntülenecek aslında

//Apilere istek aatarken useeffect çok kullanılıyo ama post isteği atılırken böyle de kullanılır:
// try {
//     const data = await createCategory({
//       name: categoryName || null,
//       technicalUnitId: tecnicalUnit || null,
//       parentCategoryId: null,
//     });.....  Direkt post edeceğimiz şeyi veriyoruz json olarak.

// Böyle get isteği attığımız apileri de şöyle çağırabiliriz:
// useEffect(() => {
//     listByParentId(id)
//       .then((data) => {
//         setSubCategories(data);
//       })

//       .catch((error) =>
//         console.error("Veriler alınırken hata oluştu: ", error)
//       );
//   }, []);

//async yoktu ben ekledim sorun olursa çıkarırız.
async function AdminCreate () {

}