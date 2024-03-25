data "azurerm_resource_group" "example" {
  name = var.resource_group_name
}
module "vnet" {
  source                      = "/home/cloud/statefile/modules/vnet"  #../modules/vnet
  vnet_name                        = var.vnet_name
  location                    = var.location
  network_address_space       = var.network_address_space
  aks_subnet_address_prefix   = var.aks_subnet_address_prefix
  aks_subnet_address_name     = var.aks_subnet_address_name
  vnet_environment                 = var.vnet_environment
  resource_group_name         = data.azurerm_resource_group.example.name
  resource_group_location     = data.azurerm_resource_group.example.location
}