import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'card-blue-small',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
      data: { accentColor: '#084D63', headerSize: 'small', showHeader:  true,  showImage: true, showFooter: true }
  },
  {
    path: 'card-blue-large',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#084D63', headerSize: 'large', showHeader:  true,  showImage: true, showFooter: true }
  },
  {
    path: 'card-blue-large-no-footer',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#084D63', headerSize: 'large', showHeader:  true,  showImage: true, showFooter: false }
  },
  {
    path: 'card-blue-large-no-header',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#084D63', headerSize: 'large', showHeader:  false,  showImage: true, showFooter: true }
  },
  {
    path: 'card-blue-large-no-image',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#084D63', headerSize: 'large', showHeader:  true,  showImage: false, showFooter: true }
  },
  {
    path: 'card-blue-medium',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#084D63', headerSize: 'medium', showHeader:  true,  showImage: true, showFooter: true }
  },
  {
    path: 'card-green-small',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#00C9A5', headerSize: 'small', showHeader:  true,  showImage: true, showFooter: true }
  },
  {
    path: 'card-green-small-no-footer ',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#00C9A5', headerSize: 'small', showHeader:  true,  showImage: true, showFooter: false }
  },
  {
    path: 'card-green-small-no-header',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#00C9A5', headerSize: 'small', showHeader:  false,  showImage: true, showFooter: true }
  },
  {
    path: 'card-green-medium',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#00C9A5', headerSize: 'medium', showHeader:  true,  showImage: true, showFooter: true }
  },
  {
    path: 'card-green-large',
    loadChildren: () =>  import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#00C9A5', headerSize: 'large', showHeader:  true,  showImage: true, showFooter: true }
  },
  {
    path: 'card-grey-large',
    loadChildren: () => import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#EBEBEB', headerSize: 'large',  showHeader:  true,  showImage: true, showFooter: true }
  },
  {
    path: 'card-grey-medium',
    loadChildren: () => import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#EBEBEB', headerSize: 'medium',  showHeader:  true,  showImage: true, showFooter: true }
  },
  {
    path: 'card-grey-small',
    loadChildren: () => import('@wpay-ui/card').then(m => m.CardModule),
    data: { accentColor: '#EBEBEB', headerSize: 'small',  showHeader:  true,  showImage: true, showFooter: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
