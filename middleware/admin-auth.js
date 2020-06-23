export default function({store, redirect}){
  if(!store.getters['auth/isAuthrnticated']){
    redirect('/admin/login?message=login')
  }
}
