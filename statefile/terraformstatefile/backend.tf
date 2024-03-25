terraform {
    backend "azurerm" {
        resource_group_name  = "cooey-terraform-rg"
        storage_account_name = "statefilestorage2024"
        container_name       = "statefilecontainer"
        key                  = "terraform.tfstate"
    }
}