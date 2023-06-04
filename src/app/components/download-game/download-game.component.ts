import { Component, OnInit } from '@angular/core';
import { DownloadGameService } from 'src/app/services/download-game.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-download-game',
  templateUrl: './download-game.component.html',
  styleUrls: ['./download-game.component.css']
})
export class DownloadGameComponent implements OnInit {
  isLoggedIn = false;

  constructor(private downloadService: DownloadGameService) {
    if (localStorage.getItem('isLoggedIn')=='true') {
      this.isLoggedIn=true;
    } else  {
      this.isLoggedIn=false;
    }
  }

  downloadGame(): void {
    this.downloadService.downloadGame().subscribe(
      response => {
        const contentDisposition = response.headers.get('Content-Disposition');

        console.log("empezando descarga");

        if (response.body != null) {
          const filename = "BulletHellGame";
          this.saveFile(response.body, filename);
        }
      },
      error => {
        console.log("Something went wrong")
        
      }
    );
  }

  private getFilenameFromContentDisposition(contentDisposition: string): string {
    const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = regex.exec(contentDisposition);
    if (matches != null && matches[1]) {
      return matches[1].replace(/['"]/g, '');
    }
    return 'file';
  }

  private saveFile(data: Blob, filename: string): void {
    saveAs(data, filename);
  }

  ngOnInit(): void {
  }

}
