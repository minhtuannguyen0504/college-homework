import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { UserDemoService } from '../../services/userDemo/user-demo.service';

@Component({
    selector: 'app-user-demo',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './user-demo.component.html',
    styleUrl: './user-demo.component.scss',
})
export class UserDemoComponent {
    searchControl = new FormControl('');
    users: any = [];
    allUsers: any = [];
    genderFilter: string = '';

    constructor(
        private userDemoService: UserDemoService,
        private http: HttpClient
    ) {
        this.userDemoService.getList().subscribe(
            (data: any) => {
                this.allUsers = data.users.map((user: { gender: string }) => {
                    return {
                        ...user,
                        gender:
                            user.gender.charAt(0).toUpperCase() +
                            user.gender.slice(1).toLowerCase(),
                    };
                });
                this.applyFilters();
            },
            (error: Error) => {
                console.error(error);
            }
        );

        this.searchControl.valueChanges
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe(() => {
                this.applyFilters();
            });
    }

    applyFilters(): void {
        const searchTerm = this.searchControl.value?.toLowerCase() || '';

        this.users = this.allUsers.filter((user: any) => {
            const matchesSearch =
                user.firstName.toLowerCase().includes(searchTerm) ||
                user.lastName.toLowerCase().includes(searchTerm);

            const matchesGender = this.genderFilter
                ? user.gender.toLowerCase() === this.genderFilter.toLowerCase()
                : true;

            return matchesSearch && matchesGender;
        });
    }

    handleFilterByGender(gender: string): void {
        this.genderFilter = gender;
        this.applyFilters();
    }

    handleRefresh() {
        this.genderFilter = '';
        this.applyFilters();
    }
}
