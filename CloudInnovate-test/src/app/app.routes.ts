// import { Routes } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReleaseNoteComponent } from './release-note/release-note.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { DockerImagesComponent } from './docker-images/docker-images.component';
import { RfcComponent } from './rfc/rfc.component';

export const AppRoutes:Routes = [
    {
        path : '',
        component : HomeComponent
    },
     {
        path : 'rfc',
        component : RfcComponent
    },
    {
        path : 'releaseNote',
        component : ReleaseNoteComponent
    },
     {
        path : 'documentation',
        component : DocumentationComponent
    },
    { path : 'tutorials',
    component : TutorialsComponent
    },
     { path : 'images',
    component : DockerImagesComponent
    }


]
